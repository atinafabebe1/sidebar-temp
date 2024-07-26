import React, { useEffect, useState } from 'react';
import SchoolTable from '../../components/Table/SchoolTable';
import { getSchools } from '../../api/api';

function DisplaySchool() {
  const [schools, setSchools] = useState();

  useEffect(() => {
    const fetchSchools = async () => {
      const response = await getSchools('');
      console.log(response);
      setSchools(response.data);
    };
    fetchSchools();
  }, []);

  return (
    <div className="bg-white h-screen p-8">
      <h3 className="text-2xl font-bold mb-6">Schools</h3>
      {schools && <SchoolTable schools={schools} />}
    </div>
  );
}

export default DisplaySchool;
