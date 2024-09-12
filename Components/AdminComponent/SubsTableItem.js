import React from "react";
import EmailDeleteButton from "./EmailDeleteButton";

const SubsTableItem = ({ email, mongoId, date }) => {
  return (
    <tr className="bg-white border-b text-left">
      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {email ? email : "no email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{date}</td>
      <td className="px-6 py-4 cursor-pointer">
        <EmailDeleteButton id={mongoId} />
      </td>
    </tr>
  );
};

export default SubsTableItem;
