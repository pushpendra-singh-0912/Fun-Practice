import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";

export default function TableRow({ row }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 ">{row.tabId}</td>
      <td className="px-4 py-2">{row.rfiId}</td>
      <td className="px-4 py-2">{row.location}</td>
      <td className="px-4 py-2">{row.location1}</td>
      <td className="px-4 py-2">{row.category}</td>
      <td className="px-4 py-2">{row.notes}</td>
      <td className="px-4 py-2">
        <StatusBadge status={row.status} />
      </td>
      <td className="px-4 py-2">{row.raisedBy}</td>
      <td className="px-4 py-2">{row.intimatedTo}</td>
      <td className="px-4 py-2">{row.approver}</td>
      <td className="px-4 py-2">{row.lastChkBy}</td>
      <td className="px-4 py-2">{row.originatedDate}</td>
      <td className="px-4 py-2 text-right">
        <ActionMenu />
      </td>
    </tr>
  );
}
