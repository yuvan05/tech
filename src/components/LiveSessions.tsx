import { Video, Calendar, Clock } from 'lucide-react';
import { liveSessions } from '../data/sessions';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

export default function LiveSessions() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Upcoming Live Sessions"
          subtitle="Interactive sessions with industry experts"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {liveSessions.map((session) => (
            <div key={session.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 md:w-48">
                <img className="h-48 w-full md:h-full object-cover" src={session.image} alt={session.title} />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center">
                  <Video className="h-5 w-5 text-red-500" />
                  <span className="ml-2 text-sm font-medium text-red-500">LIVE</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{session.title}</h3>
                <p className="mt-1 text-sm text-gray-500">with {session.instructor}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                    {session.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-gray-400" />
                    {session.time} ({session.duration})
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-600">{session.spots} spots left</span>
                  <Button variant="danger">Join Session</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}