"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

const EmailDeleteButton = ({ id }) => {
  const router = useRouter();

  const HandleDelete = async (mongoId) => {
    const res = await axios.delete("/api/emails", {
      params: {
        id: mongoId,
      },
    });
    if (res.data.success) {
      toast.success(res.data.message);
      router.refresh();
    } else {
      toast.error("error");
    }
  };
  return <Button onClick={() => HandleDelete(id)}>Delete</Button>;
};

export default EmailDeleteButton;
