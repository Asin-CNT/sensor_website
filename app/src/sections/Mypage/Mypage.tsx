import React from "react";
import person from "/assets/person.svg";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
const inquiries = [
  {
    id: 6,
    status: "답변대기",
    title: "문의사항 제목입니다",
    answerer: "관리자",
    date: "2024-02-20",
  },
  {
    id: 5,
    status: "답변대기",
    title: "문의사항 제목입니다",
    answerer: "관리자",
    date: "2024-02-20",
  },
  {
    id: 4,
    status: "답변대기",
    title: "문의사항 제목입니다",
    answerer: "관리자",
    date: "2024-02-20",
  },
  {
    id: 3,
    status: "답변대기",
    title: "문의사항 제목입니다",
    answerer: "관리자",
    date: "2024-02-20",
  },
  {
    id: 2,
    status: "답변대기",
    title: "문의사항 제목입니다",
    answerer: "관리자",
    date: "2024-02-20",
  },
  {
    id: 1,
    status: "답변대기",
    title: "문의사항 제목입니다",
    answerer: "관리자",
    date: "2024-02-20",
  },
];

function formatDate(dateStr: string) {
  // "2024-02-20" -> "2024년 2월 20일"
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  return `${y}년 ${m}월 ${d}일`;
}

export default function MyPage() {
  const {user}=useAuth();
  const navigate= useNavigate()

  return (
    <div className="min-h-screen  py-24 px-6">
      <div className="max-w-5xl mx-auto py-10">

        {/* 타이틀 */}
        <h1 className="text-3xl font-semibold text-center mb-12 text-gray-800">
          마이페이지
        </h1>

        {/* 프로필 카드 */}
        <div className="bg-white rounded-2xl shadow-sm p-10 mb-12">
          <div className="flex flex-col md:flex-row gap-14 items-center md:items-center">
            {/* 프로필 이미지 */}
            <div className="w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center shrink-0 ring-4 ring-orange-100">
              <img src={person} className="w-16 opacity-90 " alt="profile" />
            </div>

            {/* 사용자 정보 */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-5 mb-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                 {user?.name}
                </h2>
                <span className="text-md px-3 py-1 bg-gray-100 text-gray-600 rounded-md">
                  {user?.role}
                </span>
              </div>

              <p className="text-md text-gray-500 mb-1">
                  {user?.email}
              </p>
              <p className="text-md text-gray-500">
                {user?.company}
              </p>
            </div>
          </div>
        </div>

        {/* 문의내역 카드 */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* 상단 헤더 */}
          <div className="flex items-center justify-between px-4 py-6 border-b">
            <h3 className="text-2xl  font-semibold text-gray-800">
              문의내역
            </h3>

            <button 
            onClick={()=>navigate('/write')}
            className="text-sm px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              글쓰기
            </button>
          </div>

          {/* 테이블 헤더 */}
          <div className="grid grid-cols-12 px-8 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wide bg-gray-50">
            <div className="col-span-1">No</div>
            <div className="col-span-2"></div>
            <div className="col-span-5">제목</div>
            <div className="col-span-2">답변자</div>
            <div className="col-span-2 text-right">작성일</div>
          </div>

          {/* 리스트 */}
          {inquiries.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 px-8 py-5 border-t hover:bg-gray-50 transition duration-200"
            >
              <div className="col-span-1 text-gray-400 text-sm">
                {item.id}
              </div>

              <div className="col-span-2">
                <span
                  className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full
                    ${
                      item.status === "답변완료"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-2
                      ${
                        item.status === "답변완료"
                          ? "bg-orange-500"
                          : "bg-gray-400"
                      }`}
                  />
                  {item.status}
                </span>
              </div>

              <div className="col-span-5 font-medium text-gray-800 text-sm truncate">
                {item.title}
              </div>

              <div className="col-span-2 text-gray-600 text-sm">
                {item.answerer}
              </div>

              <div className="col-span-2 text-right text-gray-500 text-sm">
                {formatDate(item.date)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}