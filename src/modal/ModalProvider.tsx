"use client";

import { atom, useAtomValue } from "jotai";
import { atomFamily, selectAtom } from "jotai/utils";

export interface Modals {
  [key: string]: { hide: boolean; close?: boolean };
}

// 다양한 모달을 관리
export const modalProviderState = atom<Modals>({});

// 특정 Modal에 대한 Selector
export const modalSelector = atomFamily((key: string) => atom(
  (get) => get(modalProviderState)[key], 
  (get, set, update: { hide: boolean; close?: boolean }) => {
    const prevState = get(modalProviderState);

    if (prevState[key] && update.close) {
      const { [key]: target, ...others } = prevState;
      set(modalProviderState, others);
    } else {
      set(modalProviderState, { ...prevState, [key]: update });
    }
  }
));

// 현재 등록된 모달이 존재하는지 확인
const modalCountSelector = selectAtom(modalProviderState, (state) => Object.keys(state).length > 0);

export default function ModalProvider() {
  const available = useAtomValue(modalCountSelector);

  return (
    <div
      id="modal"
      className={`fixed ${available ? "backdrop-blur-xs" : "pointer-events-none"} z-50 h-screen w-screen`}
    />
  );
}
