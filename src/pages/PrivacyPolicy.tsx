import "../output.css";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="font-semibold text-xl text-gray-800 mb-4">
                            Privacy Policy for StolenOrNot Android App
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                1. Introduction
                            </div>
                            <p className="text-gray-600">
                                StolenOrNot is an Android app designed to allow
                                users to track and report stolen devices. This
                                Privacy Policy outlines our commitment to
                                protecting the privacy of individuals who use
                                our app.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                2. What data is being collected?
                            </div>
                            <p className="text-gray-600">
                                StolenOrNot collects the following data from its
                                users: Email, Password, and Device details.
                                Users provide their email and password for
                                authentication purposes, and device details are
                                collected to track and report stolen devices.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                3. How is the data being collected?
                            </div>
                            <p className="text-gray-600">
                                Data is collected directly from the user when
                                they register and use the app. Users
                                authenticate via email and password or Google
                                Authentication, and device details are added by
                                users.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                4. Why is the data being collected?
                            </div>
                            <p className="text-gray-600">
                                The data is collected to authenticate users and
                                facilitate the tracking and reporting of stolen
                                devices. This data helps us provide a
                                personalized and secure experience for our
                                users.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                5. How is the data used?
                            </div>
                            <p className="text-gray-600">
                                The collected data is used solely for the
                                operation of the app. It is used for
                                authenticating users and tracking their added
                                devices.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                6. Who else has access to the data?
                            </div>
                            <p className="text-gray-600">
                                The data accessed by StolenOrNot is not shared
                                with any third parties. The developers of the
                                app also do not have access to this data.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                7. How can users control their data?
                            </div>
                            <p className="text-gray-600">
                                As a user, you have the right to access, modify,
                                and delete your data. This can be done within
                                the app itself.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
