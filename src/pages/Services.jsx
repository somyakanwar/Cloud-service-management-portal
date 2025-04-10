// Services management UI
import { useState } from 'react';

const initialServices = [
  { id: 1, name: 'VM-001', status: 'Running' },
  { id: 2, name: 'Database-04', status: 'Stopped' },
  { id: 3, name: 'Cache-02', status: 'Error' },
  { id: 4, name: 'LoadBalancer-1', status: 'Running' },
];

export default function Services() {
  const [services, setServices] = useState(initialServices);
  const [filter, setFilter] = useState('All');

  const handleAction = (id, action) => {
    setServices(prev =>
      prev.map(service =>
        service.id === id
          ? { ...service, status: action === 'Restart' ? 'Running' : action }
          : service
      )
    );
  };

  const filteredServices =
    filter === 'All'
      ? services
      : services.filter(service => service.status === filter);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Cloud Services</h1>

      <div className="mb-4 flex gap-2">
        {['All', 'Running', 'Stopped', 'Error'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded border ${
              filter === status
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <table className="min-w-full bg-white rounded shadow overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Service</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map(service => (
            <tr key={service.id} className="border-t">
              <td className="p-3 font-medium">{service.name}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-sm font-semibold ${
                    service.status === 'Running'
                      ? 'bg-green-100 text-green-700'
                      : service.status === 'Stopped'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {service.status}
                </span>
              </td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() => handleAction(service.id, 'Running')}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Start
                </button>
                <button
                  onClick={() => handleAction(service.id, 'Stopped')}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Stop
                </button>
                <button
                  onClick={() => handleAction(service.id, 'Restart')}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Restart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}