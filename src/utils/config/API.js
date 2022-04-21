const API_URL = `https://mvfdi3wy33.execute-api.ap-south-1.amazonaws.com/dev`
const API_URL_NODE = `https://api.collegepass.org`
// const API_URL = `http://localhost:5000`


export const sendNotifcation = `${API_URL_NODE}/api/v2/pushnotification/sendmessage`

export const authAPI = `${API_URL}/api/v1/auth/login`

export const getUsers = `${API_URL}/api/v1/getUsers`

export const getLimitedUsers = `${API_URL}/api/v1/getLimitedUsers`

export const getPrimePlusUser = `${API_URL}/api/v1/getPrimePlusUser`

export const updateUserDetail = `${API_URL}/api/v1/updateUserDetail/`

export const APIGetStates =
  'https://api.collegepass.org/api/v1/profile/GetStateByCountryID/'

export const searchForUsers = `${API_URL}/api/v1/searchUser`

export const getEventFullData = `${API_URL}/api/v1/getEventFullData`

export const getEventRegistrationData = `${API_URL}/api/v1/getEventRegistrationData/`

export const getEventAttendeeData = `${API_URL}/api/v1/getEventAttendeeData/`

export const getArchiveVideos = `${API_URL}/api/v1/getAllArchiveVideos/`

export const getUserDetailByID = `${API_URL}/api/v1/getUserDetailByID/`

export const getClassesFullData = `${API_URL}/api/v1/getClassesFullData`

export const deleteEvent = `${API_URL}/api/v1/deleteEvent/`

export const insertNewClass = `${API_URL}/api/v1/insertNewClass`

export const insertArchiveClasses = `${API_URL}/api/v1/insertArchiveClasses/`

export const getClassListDropDown = `${API_URL}/api/v1/getClassListDropDown/`

export const getEventListDropDown = `${API_URL}/api/v1/getEventListDropDown/`

export const insertArchiveLiveStream = `${API_URL}/api/v1/insertArchiveLiveStream/`

export const getEventFullDataByID = `${API_URL}/api/v1/getEventFullDataByID/`

export const APIGetEventTags = `${API_URL}/api/v1/getEventTags`

export const APIGetAllAMilers = `${API_URL}/api/v1/getAllMailers`

export const APISetMailer = `${API_URL}/api/v1/setMailer`

export const APISendMail = `${API_URL}/api/v1/sendMailNow/`

export const APIuserAdminDBDetails = `${API_URL}/api/v2/users/basic-user-details`

export const APIuserPrimeDetails = `${API_URL}/api/v2/users/prime-status`

export const APIuserPrimePlusDetails = `${API_URL}/api/v2/users/prime-plus-details`

export const APIupdatePrimeDetails = `${API_URL}/api/v2/users/prime-details/`

export const APIupdatePrimePlusDetails = `${API_URL}/api/v2/users/prime-plus-details/`

export const APIupdateMandatoryDetails = `${API_URL}/api/v2/users/basic-user-details/`

export const getContestRegistrationData = `${API_URL}/api/v2/users/sat-contest/`

export const APIupdateUserPassword = `${API_URL}/api/v2/users/update-user-password/`
