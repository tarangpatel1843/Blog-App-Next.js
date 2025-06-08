"use server"

import { redirect } from "next/navigation"

export const searchAction = async (FormData: FormData) => {
    const searchText = FormData.get("search");
    if (typeof searchText !== "string" || !searchText) {
        redirect("/")
    }
    redirect(`/articles?search=${searchText}`);
}