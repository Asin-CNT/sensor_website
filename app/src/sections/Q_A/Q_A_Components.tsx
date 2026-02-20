export default function Q_A_Components() {
  const data = [6,5,4,3,2,1];

  return (
    <section className="w-full py-20 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* 제목 */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          질문과 답변
        </h2>

        <div className="border-t border-gray-300 mb-6"></div>

        {/* ========================= */}
        {/* ✅ 데스크탑 테이블 */}
        {/* ========================= */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="border-b border-gray-300">
              <tr>
                <th className="py-3 px-2 w-16">No</th>
                <th className="py-3 px-2 w-32"></th>
                <th className="py-3 px-2">제목</th>
                <th className="py-3 px-2">답변자</th>
                <th className="py-3 px-2 w-32 text-right">작성시간</th>
              </tr>
            </thead>
            <tbody>
              {data.map((no) => (
                <tr
                  key={no}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-2">{no}</td>
                  <td className="py-4 px-2 text-gray-500">답변대기</td>
                  <td className="py-4 px-2">샘플 질문 제목입니다</td>
                  <td className="py-4 px-2">관리자</td>
                  <td className="py-4 px-2 text-right text-gray-400">
                    2024-02-20
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ========================= */}
        {/* ✅ 모바일 카드형 */}
        {/* ========================= */}
        <div className="md:hidden space-y-4">
          {data.map((no) => (
            <div
              key={no}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>No. {no}</span>
                <span>2024-02-20</span>
              </div>

              <div className="text-sm text-gray-500 mb-1">
                답변대기
              </div>

              <div className="font-medium text-gray-800 mb-2">
                샘플 질문 제목입니다
              </div>

              <div className="text-xs text-gray-400">
                답변자: 관리자
              </div>
            </div>
          ))}
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-end mt-8">
          <button className="bg-black text-white px-4 py-2 md:px-5 md:py-2 rounded-md text-sm hover:bg-gray-800 transition">
            글쓰기
          </button>
        </div>

      </div>
    </section>
  );
}