import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className="cc-login-bg flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white/25 p-8 shadow-[var(--shadow-card)] backdrop-blur">
        <div className="mb-6 flex flex-col items-center gap-2 text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 font-heading text-xl font-bold">
            CC
          </div>
          <h1 className="font-heading text-2xl font-semibold">CultureConnect</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/90" htmlFor="email">
              Name / Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-white/40 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/90" htmlFor="password">
              Passwort
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-white/40 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <Button type="submit" className="mt-2 w-full bg-white text-cc-cyan-dark hover:bg-white/90">
            Login
          </Button>
          <button
            type="button"
            className="text-sm text-white/90 underline-offset-2 hover:underline"
            onClick={() => navigate('/')}
          >
            Account erstellen
          </button>
        </form>
      </div>
    </div>
  );
}
