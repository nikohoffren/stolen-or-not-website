
import "../output.css";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="text-center font-semibold text-3xl text-gray-800">
                            StolenOrNot? Android-app
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="smart-meeting-scheduler-logo-128-128.jpg"
                                alt="Smart Meeting Scheduler logo"
                                className="mx-auto"
                            />
                        </div>
                        <div>
                            <p className="mt-4 text-center text-gray-600">
                                <a href="https://play.google.com/store/apps/details?id=com.nikohoffren.stolen_gear_app" className="text-blue-600 hover:text-blue-800" target="blank">Download from Google Play Store</a>
                            </p>
                        </div>
                        <div className="text-center mt-3 text-lg text-gray-600">
                            A powerful tool designed to simplify and streamline
                            the process of scheduling meetings using Google
                            Calendar.
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold text-lg text-gray-700">
                                Features
                            </p>
                            <ul className="mt-3 text-md text-gray-600 list-disc list-inside">
                                <li>
                                    Efficient Meeting Scheduling: Input the
                                    meeting details, including the list of
                                    attendees and their preferred meeting dates,
                                    and let the extension handle the rest.
                                </li>
                                <li>
                                    Integration with Google Calendar: Leverage
                                    the Google Calendar API to automatically
                                    find available time slots for all attendees.
                                </li>
                                <li>
                                    User-Friendly Interface: The extension
                                    provides an intuitive user interface that
                                    makes it easy to input meeting details and
                                    view the suggested meeting times.
                                </li>
                                <li>
                                    Enhanced Productivity: Save time and effort
                                    by eliminating the manual process of
                                    scheduling meetings and reducing the
                                    likelihood of conflicting appointments.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
