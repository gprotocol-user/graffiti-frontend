import { useState, useEffect, useCallback } from "react";
import { isJwtExpired } from "@/lib/utils";

const useJWT = () => {
  const [loading, setLoading] = useState(true);
  const [captchaResolved, setCaptchaResolved] = useState(false);

  const handleVerify = async (cfToken: string) => {
    const res = await fetch(process.env.NEXT_PUBLIC_JWT_ISSUER as string, {
      method: "POST",
      body: JSON.stringify({ "cf-turnstile-response": cfToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const { JWT }: { JWT: string } = await res.json();
      localStorage.setItem("jwt", JWT);
      setCaptchaResolved(true);
    }
  };

  const handleJWTReissue = useCallback(() => {
    console.log("REISSUING JWT");
    setCaptchaResolved(false);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt && !isJwtExpired(jwt)) {
      setCaptchaResolved(true); //skipping verification
    }
    setLoading(false);
  }, []);

  return {
    handleJWTReissue,
    handleVerify,
    loading,
    captchaResolved,
  };
};

export default useJWT;
