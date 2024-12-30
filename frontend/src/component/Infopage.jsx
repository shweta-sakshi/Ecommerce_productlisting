import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Button } from '@headlessui/react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Infopage = () => {
    return (
        <>
            <div className='ml-28 mr-28'>
                <div className="px-4 mt-16 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                                <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                                <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
                <Link to="/edituserdetails" className='flex items-center justify-center mb-9 mt-6'>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Edit Details
                    </button>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default Infopage