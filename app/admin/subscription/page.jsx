import SubsTableItem from "@/Components/AdminComponent/SubsTableItem";
import axios from "axios";
import React from "react";

const getEmails = async () => {
  const res = await axios.get("http:localhost:3000/api/emails");
  const data = await res.data.emails;
  return data;
};

const page = async () => {
  const emails = await getEmails();
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscription</h1>
      <div className="relative max-w-600 h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th className="px-6 py-3 hidden sm:block">Date</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map(({ email, _id, date }, index) => (
              <SubsTableItem
                key={index}
                email={email}
                mongoId={_id}
                date={date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
