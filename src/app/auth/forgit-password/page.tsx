export default function ForgotPasswordPage() {
  return <div>Forgot Password</div>;
  // const [email, setEmail] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const [success, setSuccess] = useState(false);
  //
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     await forgotPassword(email);
  //     setSuccess(true);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  //
  // return (
  //   <div>
  //     <h1>Forgot Password</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <button type="submit" disabled={loading}>
  //         {loading ? 'Loading...' : 'Submit'}
  //       </button>
  //       {error && <p style={{ color: 'red' }}>{error}</p>}
  //       {success && <p style={{ color: 'green' }}>Email sent!</p>}
  //     </form>
  //   </div>
  // );
}