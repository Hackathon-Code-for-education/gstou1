import React from "react"
// input Name
// photo


const StudentApplication = () => {

    return(
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                <div className="p-2 md:p-4">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl">Анкета для студента</h2>
                        <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                                <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Bordered avatar" />
                                <div className="flex flex-col space-y-5 sm:ml-8">
                                    <button type="button"
                                        className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200">
                                        Добавить изображение
                                    </button>
                                    <button type="button"
                                        className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200">
                                        Удалить изображение
                                    </button>
                                </div>
                            </div>
                            <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                                    <div className="mb-2 sm:mb-6">
                                    <label htmlFor="profession" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Прикрепить справку о обучении</label>
                                    <input type="file" id="profession" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="your profession" required />
                                </div>
                                
                                <div className="mb-2 sm:mb-6">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your name</label>
                                    <input type="name" id="name" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="your name" required />
                                </div>

                                <div className="flex justify-end">
                                    <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Подать заявку</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default StudentApplication