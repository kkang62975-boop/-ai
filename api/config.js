// Vercel 서버리스 함수: Supabase URL/anon key를 Vercel 환경변수에서 읽어 클라이언트에 내려준다.
// anon key는 Supabase RLS로 보호되는 공개 가능한 키지만, 값 자체는 저장소 코드에 남기지 않는다.
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    url: process.env.SUPABASE_URL || null,
    anonKey: process.env.SUPABASE_ANON_KEY || null,
  });
};
