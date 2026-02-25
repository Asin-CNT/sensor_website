
import { Suspense ,lazy } from "react";
import { useNavigate } from "react-router-dom";

const AnimatedBackground = lazy(() => import('@/components/three/AnimatedBackground'));


export default function LoginPage() {
  const navigate=useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r h-auto ">
      
      {/* 메인 카드 */}
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* 왼쪽 그라데이션 영역 */}
        <div className="md:w-1/2 
        relative
        bg-gradient-to-br  flex flex-col justify-between rounded-l-lg">
          
          <Suspense>
                  
                 <AnimatedBackground />          
              
               </Suspense>
       
        </div>

        {/* 오른쪽 로그인 영역 */}
        <div className="md:w-1/2 p-14 flex flex-col justify-center">
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-10 text-center md:text-left">
            로그인
          </h2>

          {/* username */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="아이디를 입력해주세요"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-500 py-2"
            />
          </div>

          {/* password */}
          <div className="mb-3">
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-500 py-2"
            />
          </div>

       

          {/* 로그인 버튼 */}
          <button className="w-full py-3 mt-10  rounded-md text-white font-semibold bg-gradient-to-r bg-orange-500  hover:opacity-90 transition mb-8">
            로그인
          </button>
          <div className="flex justify-end">
                    <p
                    
                        onClick={() => navigate("/enroll")}
                    > 회원가입 </p>
          </div>

   

         

         

        </div>
      </div>
    </div>
  );
}