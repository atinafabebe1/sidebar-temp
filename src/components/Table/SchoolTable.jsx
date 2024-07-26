import React from 'react';

function SchoolTable({ schools }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Founded Year</th>
              <th>Logo</th>
              <th>Awards</th>
              <th>Scholarships</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) => (
              <tr key={school.id}>
                <td>{school.id}</td>
                <td>{school.name}</td>
                <td>{school.foundedYear}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={school.logo} alt={`${school.name} Logo`} />
                    </div>
                  </div>
                </td>
                <td>
                  <a href={`/awards/${school.id}`} className="link link-primary">
                    Awards
                  </a>
                </td>
                <td>
                  <a href={`/scholarships/${school.id}`} className="link link-primary">
                    Scholarships
                  </a>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                  <button className="btn btn-ghost btn-xs text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Founded Year</th>
              <th>Logo</th>
              <th>Awards</th>
              <th>Scholarships</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default SchoolTable;
