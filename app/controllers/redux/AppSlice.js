import { combineReducers } from "redux"
import SignInSlice from "../../modules/screens/auth/signIn/SignInSlice"
import SignUpSlice from "../../modules/screens/auth/signUp/SignUpSlice"
import UserHomeSlice from "../../modules/screens/interfaces/user/userHome/UserHomeSlice"
import UserLibrarianSlice from "../../modules/screens/interfaces/user/userLibrarian/UserLibrarianSlice"
import UserProfileSlice from "../../modules/screens/interfaces/user/userProfile/UserProfileSlice"
import UserQRSlice from "../../modules/screens/interfaces/user/userQR/UserQRSlice"
import CalendarSlice from "../../modules/screens/interfaces/user/calendar/CalendarSlice"
import BookSlice from "../../modules/screens/interfaces/user/book/BookSlice"
import CategorySlice from "../../modules/screens/interfaces/user/category/CategorySlice"
import UserNotificationSlice from "../../modules/screens/interfaces/user/userNoti/UserNotificationSlice"
import UserSettingSlice from "../../modules/screens/interfaces/user/userSetting/UserSettingSlice"
import LibraryInfoSlice from "../../modules/screens/interfaces/user/libraryInfo/LibraryInfoSlice"
import BookManagementSlice from "../../modules/screens/interfaces/staff/bookManagement/BookManagementSlice"
import InvoiceManagementSlice from "../../modules/screens/interfaces/staff/invoiceManagement/InvoiceManagementSlice"
import StaffQRSlice from "../../modules/screens/interfaces/staff/staffQR/StaffQRSlice"
import StaffSettingSlice from "../../modules/screens/interfaces/staff/staffSetting/StaffSettingSlice"

const reducers = combineReducers({
    signIn: SignInSlice,
    signUp: SignUpSlice,
    userHome: UserHomeSlice,
    userLibrarian: UserLibrarianSlice,
    userProfile: UserProfileSlice,
    userQR: UserQRSlice,
    calendar: CalendarSlice,
    book: BookSlice,
    category: CategorySlice,
    userNotification: UserNotificationSlice,
    userSetting: UserSettingSlice,
    library: LibraryInfoSlice,
    bookManagement: BookManagementSlice,
    invoiceManagement: InvoiceManagementSlice,
    staffQR: StaffQRSlice,
    staffSetting: StaffSettingSlice,
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer
