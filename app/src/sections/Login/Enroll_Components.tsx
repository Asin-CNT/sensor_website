import { useState, useRef } from "react";

export default function ControlledFeedbackForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "",company:"" });
    const[error,setError]= useState({
        name:"",
        email:"",
        company:"",
    })
    const [isSubmitted, setIsSubmitted] = useState(false);

    

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
       
        
    };

   
 const validateField = (name: string, value: string) => {
  switch (name) {
    case "name":
      return value.trim() ? "" : "이름을 입력해주세요.";

    case "email":
      if (!value.trim()) return "이메일을 입력해주세요.";
      if (!value.includes("@")) return "올바른 이메일 형식이 아닙니다.";
      return ""

    case "company":
      return value.trim() ? "" : "회사 정보를 입력해주세요.";

    default:
      return "";
  }
};



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      setIsSubmitted(true);
    
      const newErrors: any = {};
    
      Object.keys(form).forEach((key) => {
        const field = key as keyof typeof form;
        const message = validateField(field, form[field]);
        if (message) newErrors[field] = message;
      });
    
      setError(newErrors);
    
      if (Object.keys(newErrors).length === 0) {
        // 여기에 이제 서버 넣으면 될듯.. 서버db 알아보기 ㅠㅠ
      }
    };

    return (
        <section className="w-full py-20 bg-white min-h-screen flex items-center ">
      <div className="max-w-3xl mx-auto w-[50%]  ">

        {/* 제목 */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          회원가입
        </h2>

        <div className="border-t border-gray-300 mb-8"></div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* 이름 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="이름을 입력하세요"
            />
              
            <div className="flex ">
                { isSubmitted && error.name!=""&& <p className="text-red-500 font-bold px-4 py-1 ">{error.name}</p>}
            </div>
          
          </div>

          {/* 이메일 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이메일 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="example@email.com"
            />
           <div className="flex ">
                { isSubmitted && error.email!=""&& <p className="text-red-500 font-bold px-4 py-1 ">{error.email}</p>}
            </div>
          </div>
           

          {/* 휴대폰 (선택) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              휴대폰 (선택)
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="010-0000-0000"
            />
          </div>

          {/* 회사정보 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              회사 정보 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="회사명을 입력하세요"
            />
                <div className="flex ">
                { isSubmitted && error.company!=""&& <p className="text-red-500 font-bold px-4 py-1 ">{error.company}</p>}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="bg-company_orange text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              가입하기
            </button>
          </div>

        </form>
      </div>
    </section>
    );
}