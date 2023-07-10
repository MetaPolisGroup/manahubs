"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import ThemeModeBtn from "./ThemeModeBtn";
import ProfileBtn from "./ProfileBtn";
import ConnectButton from "./ConnectBtn";
import { usePathname } from "next/navigation";

const transactions = [
  {
    name: "ERC20",
    description: "Get your ERC20 transactions",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "NFT",
    description: "Get your ERC721 an ERC1155 transactions",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];

const balances = [
  {
    name: "ERC20",
    description: "Get your ERC20 balances",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "NFT",
    description: "Get your ERC721 an ERC1155 balances",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="bg-indigo-950 dark:bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              className="h-14 w-auto"
              src="/logo_manahubs.svg"
              alt="Manahubs"
              width={500}
              height={200}
            />
          </a>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className={`text-sm font-semibold leading-6 text-white ${
              pathname === "/" ? "text-yellow-500" : ""
            }`}
          >
            Explore
          </a>
          <Popover className="relative">
            <Popover.Button
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 text-white ${
                pathname.startsWith("/transaction") ? "text-yellow-500" : ""
              }`}
            >
              Transaction
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {transactions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:border-transparent ${
                pathname.startsWith("/balances") ? "text-yellow-500" : ""
              }`}
            >
              Balances
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {balances.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="/staking-v1"
            className={`text-sm font-semibold leading-6 text-white ${
              pathname === "/staking-v1" ? "text-yellow-500" : ""
            }`}
          >
            Staking V1
          </a>
          <a
            href="/staking-v2"
            className={`text-sm font-semibold leading-6 text-white ${
              pathname === "/staking-v2" ? "text-yellow-500" : ""
            }`}
          >
            Staking V2
          </a>
        </Popover.Group>
        <div className="flex flex-1 justify-end items-center gap-5">
          <ThemeModeBtn />
          <ProfileBtn />
          <ConnectButton />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-14 w-auto"
                src="/logo_manahubs.svg"
                alt="Manahubs"
                width={500}
                height={200}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-50 focus:bg-transparent ${
                    pathname === "/"
                      ? "text-yellow-500 dark:text-yellow-500"
                      : ""
                  }`}
                >
                  Explore
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-50 focus:bg-transparent ${
                          pathname.startsWith("/transaction")
                            ? "text-yellow-500 dark:text-yellow-500"
                            : ""
                        }`}
                      >
                        Transaction
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...transactions].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-50"
                          >
                            {item.name}
                            <p className="text-gray-500">{item.description}</p>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-50 focus:bg-transparent ${
                          pathname.startsWith("/balances")
                            ? "text-yellow-500 dark:text-yellow-500"
                            : ""
                        }`}
                      >
                        Balances
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...balances].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-50"
                          >
                            {item.name}
                            <p className="text-gray-500">{item.description}</p>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/staking-v1"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-50 focus:bg-transparent ${
                    pathname === "/staking-v1"
                      ? "text-yellow-500 dark:text-yellow-500"
                      : ""
                  }`}
                >
                  Staking V1
                </a>
                <a
                  href="/staking-v2"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-50 focus:bg-transparent ${
                    pathname === "/staking-v2"
                      ? "text-yellow-500 dark:text-yellow-500"
                      : ""
                  }`}
                >
                  Staking V2
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
