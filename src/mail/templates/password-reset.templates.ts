export function passwordResetTemplate(resetUrl: string) {
  return `
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Reset your password</h1>

        <p>
          We received a request to reset your ForChild password.
        </p>

        <a href="${resetUrl}">
          Reset password
        </a>

        <p>
          This link will expire in 30 minutes.
        </p>
      </body>
    </html>
  `;
}
