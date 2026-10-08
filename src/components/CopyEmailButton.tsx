"use client";

import { useState } from "react";

/** 이메일 링크 + 복사 버튼 + 복사 결과 안내 */
export function EmailActions({ email }: { email: string }) {
  const [status, setStatus] = useState("");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("이메일 주소를 복사했습니다.");
    } catch {
      setStatus("복사가 지원되지 않습니다. 이메일 주소를 직접 선택해 복사해 주세요.");
    }
  };
  return (
    <>
      <div className="contact-actions">
        <a className="email" href={`mailto:${email}`}>
          {email}
        </a>
        <button className="copy" type="button" onClick={copy}>
          이메일 복사
        </button>
      </div>
      <div className="status" role="status" aria-live="polite">
        {status}
      </div>
    </>
  );
}
