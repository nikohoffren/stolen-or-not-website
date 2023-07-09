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
                                src="app_icon.png"
                                alt="StolenOrNot? logo"
                                className="mx-auto"
                            />
                        </div>
                        <div>
                            <p className="mt-4 text-center text-gray-600">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.nikohoffren.stolen_gear_app"
                                    className="text-blue-600 hover:text-blue-800"
                                    target="blank"
                                >
                                    Download from Google Play Store
                                </a>
                            </p>
                        </div>
                        <div className="text-center mt-3 text-lg text-gray-600">
                            This Flutter application is built to help people
                            keep track of their valuable devices and protect
                            them from theft. It allows users to register their
                            devices, such as computers, cars, musical
                            instruments, and more by entering a name and a
                            unique serial number for each device. If a device
                            gets stolen, users can mark it as such in the app.
                            That way, if someone is selling the device in
                            question, people will be able to check whether the
                            device is already registered to someone in the app.
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold text-lg text-gray-700">
                                Features
                            </p>
                            <ul className="mt-3 text-md text-gray-600 list-disc list-inside">
                                <li>
                                    User Authentication: Users can create
                                    accounts and log in using Firebase
                                    Authentication. This ensures the privacy and
                                    security of their registered devices.
                                </li>
                                <li>
                                    Integration with Google Calendar: Leverage
                                    the Google Calendar API to automatically
                                    find available time slots for all attendees.
                                </li>
                                <li>
                                    Device Registration: Users can register
                                    their devices by entering a name and a
                                    unique serial number or IMEI depending on
                                    device. The application stores these devices
                                    in a Firestore collection. Users cannot
                                    register a device if its serial number or
                                    IMEI has already been registered.
                                </li>
                                <li>
                                    Stolen Devices: If a device is stolen, users
                                    can mark it as such in the Firestore
                                    database. This can be useful for tracking
                                    purposes, and for alerting the user's
                                    friends or the community.
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
