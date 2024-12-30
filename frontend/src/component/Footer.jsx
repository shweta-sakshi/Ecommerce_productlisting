import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Footer = () => {
    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 items-center">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-xsm font-small',
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}

export default Footer