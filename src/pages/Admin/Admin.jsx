import { useState, useEffect } from "react";
import axios from "axios";
import UserModal from "../../components/UserModal/UserModal";
import UserTable from "../../components/UserTable/UserTable";

function Admin() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_BASE_URL + "/admin/responses")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Failed to fetch admin results", err));
  }, []);

  return (
    <div className="admin-dashboard">
      <h1 className="admin-dashboard-title">Admin Dashboard</h1>

      {/* User table with callback to select user */}
      <UserTable users={users} onUserClick={setSelectedUser} />

      {/* Modal appears when a user is selected */}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default Admin;
