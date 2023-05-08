import { current } from "@reduxjs/toolkit"

export const adminCheck = currentUser => {
    if (!currentUser) || !Array.isArray(currentUser.userRoles)
}