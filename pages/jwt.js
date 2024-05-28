let Username;
  let surname;
  let email;
  // Check if userInfo is not null before accessing its properties
  if (
    userInfo &&
    userInfo.email &&
    userInfo.given_name &&
    userInfo.family_name &&
    userInfo.email
  ) {
    console.log(userInfo.email);
    Username = userInfo.given_name;
    surname = userInfo.family_name;
    email = userInfo.email;
  }
  console.log(surname);

  const verifyToken = async (token) => {
    try {
      const res = await fetch("/api/verifyToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        const data = await res.json();
        setUserInfo(data);
        console.log("Decoded JWT:", data);
      } else {
        console.error("Token verification failed");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };
  