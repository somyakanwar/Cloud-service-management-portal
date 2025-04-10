import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const cpuData = [
  { name: '10:00', value: 45 },
  { name: '10:30', value: 60 },
  { name: '11:00', value: 68 },
  { name: '11:30', value: 62 },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Running Services</h2>
          <p className="text-4xl font-bold">12</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-2">CPU Usage</h2>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={cpuData}>
              <XAxis dataKey="name" hide />
              <YAxis domain={[0, 100]} hide />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-right text-sm text-gray-600">Current: 68%</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-4xl font-bold">34</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Incidents</h2>
          <p className="text-4xl font-bold text-red-500">3</p>
        </div>
      </div>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="border-l-4 border-blue-500 pl-2">User Alice started VM-001</li>
          <li className="border-l-4 border-green-500 pl-2">User Bob restarted Database-04</li>
          <li className="border-l-4 border-red-500 pl-2">Service Cache-02 crashed</li>
        </ul>
      </div>
    </div>
  );
}
// Dashboard UI code