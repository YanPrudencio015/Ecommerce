import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500&family=Bebas+Neue&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --blue: #068FFF;
    --dark-blue: #0046FF;
    --bg: #0a0a0f;
    --surface: #111118;
    --surface2: #16161f;
    --border: rgba(6, 143, 255, 0.2);
    --text: #e8eaf0;
    --muted: #6b7280;
    --red: #BF092F;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    overflow: hidden;
  }

  .page {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  /* animated background grid */
  .grid-bg {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(6,143,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(6,143,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: gridDrift 20s linear infinite;
  }

  @keyframes gridDrift {
    0% { background-position: 0 0; }
    100% { background-position: 60px 60px; }
  }

  /* radial glow */
  .glow-left {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(6,143,255,0.15) 0%, transparent 70%);
    top: -100px;
    left: -100px;
    pointer-events: none;
    animation: breathe 4s ease-in-out infinite;
  }
  .glow-right {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,70,255,0.12) 0%, transparent 70%);
    bottom: -50px;
    right: 100px;
    pointer-events: none;
    animation: breathe 4s ease-in-out infinite 2s;
  }

  @keyframes breathe {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  /* main card */
  .card {
    width: 920px;
    max-width: 95vw;
    height: 580px;
    max-height: 95vh;
    display: flex;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 0 1px var(--border), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(6,143,255,0.08);
  }

  /* LEFT PANEL */
  .left-panel {
    width: 42%;
    background: linear-gradient(135deg, #0a0e1a 0%, #0d1a2e 50%, #091424 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 40px;
    overflow: hidden;
    flex-shrink: 0;
    transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
  }

  .left-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 20%, rgba(6,143,255,0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(0,70,255,0.15) 0%, transparent 50%);
  }

  .left-panel::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(180deg, transparent, var(--blue), transparent);
    opacity: 0.4;
  }

  /* hex decoration */
  .hex-grid {
    position: absolute;
    bottom: -20px;
    right: -30px;
    opacity: 0.06;
    font-size: 120px;
    line-height: 1;
    font-family: 'Orbitron', monospace;
    color: var(--blue);
    pointer-events: none;
    white-space: nowrap;
  }

  .logo-mark {
    font-family: 'Orbitron', monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.3em;
    color: var(--blue);
    text-transform: uppercase;
    margin-bottom: 32px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-mark::before {
    content: '';
    width: 24px;
    height: 2px;
    background: var(--blue);
    box-shadow: 0 0 8px var(--blue);
  }

  .left-headline {
    font-family: 'Orbitron', monospace;
    font-size: 36px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.02em;
    position: relative;
    margin-bottom: 20px;
  }

  .left-headline span {
    display: block;
    background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .left-headline .accent {
    background: linear-gradient(135deg, var(--blue), var(--dark-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
  }

  .left-sub {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.7;
    position: relative;
    max-width: 240px;
    margin-bottom: 40px;
  }

  .stats-row {
    display: flex;
    gap: 24px;
    position: relative;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .stat-num {
    font-family: 'Orbitron', monospace;
    font-size: 20px;
    font-weight: 700;
    color: var(--blue);
  }

  .stat-label {
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-transform: uppercase;
  }

  /* RIGHT PANEL */
  .right-panel {
    flex: 1;
    background: var(--surface);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 44px;
    position: relative;
    overflow-y: auto;
  }

  .right-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 90% 10%, rgba(6,143,255,0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  /* tab switcher */
  .tab-bar {
    display: flex;
    background: var(--surface2);
    border-radius: 8px;
    padding: 4px;
    margin-bottom: 32px;
    position: relative;
  }

  .tab-btn {
    flex: 1;
    padding: 8px 16px;
    border: none;
    background: transparent;
    color: var(--muted);
    font-family: 'Orbitron', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    cursor: pointer;
    transition: color 0.2s;
    position: relative;
    z-index: 1;
    border-radius: 6px;
  }

  .tab-btn.active {
    color: white;
  }

  .tab-indicator {
    position: absolute;
    top: 4px;
    bottom: 4px;
    width: calc(50% - 4px);
    background: linear-gradient(135deg, var(--blue), var(--dark-blue));
    border-radius: 6px;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 0 20px rgba(6,143,255,0.4);
  }

  .tab-indicator.right {
    transform: translateX(calc(100% + 8px));
  }

  /* social login */
  .social-row {
    display: flex;
    gap: 10px;
    margin-bottom: 24px;
  }

  .social-btn {
    flex: 1;
    height: 40px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  .social-btn:hover {
    border-color: var(--blue);
    background: rgba(6,143,255,0.08);
    color: var(--blue);
    box-shadow: 0 0 12px rgba(6,143,255,0.15);
  }

  /* divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    color: var(--muted);
    font-size: 11px;
    letter-spacing: 0.08em;
  }

  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* inputs */
  .field {
    margin-bottom: 16px;
  }

  .field label {
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 14px;
    letter-spacing: 0.12em;
    color: var(--muted);
    margin-bottom: 6px;
    transition: color 0.2s;
  }

  .field:focus-within label {
    color: var(--blue);
  }

  .input-wrap {
    position: relative;
  }

  .field input {
    width: 100%;
    height: 44px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0 14px;
    color: var(--text);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    outline: none;
    transition: all 0.2s;
  }

  .field input::placeholder {
    color: rgba(107,114,128,0.5);
  }

  .field input:focus {
    border-color: var(--blue);
    background: rgba(6,143,255,0.05);
    box-shadow: 0 0 0 3px rgba(6,143,255,0.1);
  }

  /* two col */
  .two-col {
    display: flex;
    gap: 12px;
  }

  .two-col .field {
    flex: 1;
  }

  /* extras row */
  .extras-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    margin-top: 4px;
  }

  .forgot-link {
    font-size: 12px;
    color: var(--muted);
    cursor: pointer;
    transition: color 0.2s;
  }

  .forgot-link:hover { color: var(--blue); }

  .remember-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--muted);
    cursor: pointer;
  }

  .custom-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--surface2);
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
  }

  .custom-checkbox.checked {
    background: var(--blue);
    border-color: var(--blue);
    box-shadow: 0 0 8px rgba(6,143,255,0.4);
  }

  .custom-checkbox.checked::after {
    content: '✓';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: white;
  }

  /* submit */
  .submit-btn {
    width: 100%;
    height: 48px;
    background: linear-gradient(135deg, var(--blue), var(--dark-blue));
    border: none;
    border-radius: 8px;
    color: white;
    font-family: 'Orbitron', monospace;
    font-size: 13px;
    letter-spacing: 0.2em;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    box-shadow: 0 0 24px rgba(6,143,255,0.3);
  }

  .submit-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
  }

  .submit-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 32px rgba(6,143,255,0.4);
  }

  .submit-btn:active {
    transform: translateY(0) scale(0.98);
  }

  /* scan line effect */
  .submit-btn::after {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(255,255,255,0.1), transparent);
    animation: scanline 3s ease-in-out infinite;
  }

  @keyframes scanline {
    0% { top: -100%; }
    50%, 100% { top: 100%; }
  }

  /* form appear animation */
  .form-section {
    animation: formIn 0.3s ease-out;
  }

  @keyframes formIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* scrollbar */
  .right-panel::-webkit-scrollbar { width: 4px; }
  .right-panel::-webkit-scrollbar-track { background: transparent; }
  .right-panel::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  /* corner decorations */
  .corner {
    position: absolute;
    width: 16px;
    height: 16px;
    border-color: var(--blue);
    border-style: solid;
    opacity: 0.4;
  }

  .corner-tl { top: 12px; left: 12px; border-width: 1px 0 0 1px; }
  .corner-tr { top: 12px; right: 12px; border-width: 1px 1px 0 0; }
  .corner-bl { bottom: 12px; left: 12px; border-width: 0 0 1px 1px; }
  .corner-br { bottom: 12px; right: 12px; border-width: 0 1px 1px 0; }

  @media (max-width: 640px) {
    .card { height: auto; max-height: 95vh; flex-direction: column; }
    .left-panel { width: 100%; padding: 28px 24px; min-height: auto; }
    .left-headline { font-size: 24px; }
    .stats-row { display: none; }
    .right-panel { padding: 28px 24px; }
  }
`;

// SVG icons
const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#5865F2">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <>
      <style>{styles}</style>
      <div className="page">
        <div className="grid-bg" />
        <div className="glow-left" />
        <div className="glow-right" />

        <div className="card">
          {/* LEFT */}
          <div className="left-panel">
            <div className="corner corner-tl" />
            <div className="corner corner-bl" />
            <div className="hex-grid">
              ⬡⬡
              <br />
              ⬡⬡
              <br />
              ⬡⬡
            </div>

            <div className="logo-mark">NEXUS PLATFORM</div>

            <h1 className="left-headline">
              <span>{isRegister ? "Join the" : "Welcome"}</span>
              <span className="accent">{isRegister ? "Network" : "Back"}</span>
            </h1>

            <p className="left-sub">
              {isRegister
                ? "Create your account and gain access to the full suite of tools and features."
                : "Sign in to your account to continue where you left off."}
            </p>

            <div className="stats-row">
              <div className="stat">
                <span className="stat-num">24K+</span>
                <span className="stat-label">Users</span>
              </div>
              <div className="stat">
                <span className="stat-num">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat">
                <span className="stat-num">v4.2</span>
                <span className="stat-label">Version</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-panel">
            <div className="corner corner-tr" />
            <div className="corner corner-br" />

            {/* Tab bar */}
            <div className="tab-bar">
              <div className={`tab-indicator ${isRegister ? "right" : ""}`} />
              <button
                className={`tab-btn ${!isRegister ? "active" : ""}`}
                onClick={() => setIsRegister(false)}
              >
                LOGIN
              </button>
              <button
                className={`tab-btn ${isRegister ? "active" : ""}`}
                onClick={() => setIsRegister(true)}
              >
                REGISTER
              </button>
            </div>

            <div className="form-section" key={isRegister ? "reg" : "log"}>
              {/* Social buttons */}
              <div className="social-row">
                <button className="social-btn">
                  <GoogleIcon /> Google
                </button>
                <button className="social-btn">
                  <DiscordIcon /> Discord
                </button>
              </div>

              <div className="divider">OR CONTINUE WITH EMAIL</div>

              {/* Fields */}
              {isRegister && (
                <div className="two-col">
                  <div className="field">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="field">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
              )}

              <div className="field">
                <label>
                  {isRegister ? "Email Address" : "Email or Username"}
                </label>
                <input
                  type="email"
                  placeholder={
                    isRegister ? "john@example.com" : "you@example.com"
                  }
                />
              </div>

              <div className="field">
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
              </div>

              {isRegister && (
                <div className="field">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
              )}

              {!isRegister && (
                <div className="extras-row">
                  <span className="forgot-link">Forgot password?</span>
                  <label
                    className="remember-label"
                    onClick={() => setRemember(!remember)}
                  >
                    <div
                      className={`custom-checkbox ${remember ? "checked" : ""}`}
                    />
                    Remember me
                  </label>
                </div>
              )}

              <button
                className="submit-btn"
                style={{ marginTop: isRegister ? "16px" : "0" }}
              >
                {isRegister ? "CREATE ACCOUNT" : "SIGN IN"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
