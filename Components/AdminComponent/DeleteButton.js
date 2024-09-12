"use client";

import axios from "axios";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const HandleDelete = async (mongoId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/blogs/${mongoId}`
      );
      router.refresh();
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Failed to delete blog.");
      console.error("Error deleting blog:", error);
    }
  };
  return <Button onClick={() => HandleDelete(id)}>Delete</Button>;
};

export default DeleteButton;
