import "./userDetail.css";

import PrimaryButton from "../PrimaryButton/PrimaryButton";

function UserTable({ users, onUserClick }) {
  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Score</th>
            <th>View Answers</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.userId}</td>
              <td>{user.score}</td>
              <td>
                <PrimaryButton onClick={() => onUserClick(user)}>
                  View
                </PrimaryButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
