import { supabase } from '../supabase/supabaseClient';
import bcrypt from 'bcryptjs';

// Sign up user
export async function signupUser({ name, email, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email, password: hashedPassword }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Login user
export async function loginUser({ email, password }) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) throw error || new Error('User not found');

  const match = await bcrypt.compare(password, data.password);
  if (!match) throw new Error('Invalid password');

  return data;
}
