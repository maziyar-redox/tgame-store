import { defineErrorCodes } from "@better-auth/core/utils/error-codes";

export const PHONE_NUMBER_ERROR_CODES = defineErrorCodes({
    INVALID_PHONE_NUMBER: "شماره تلفن وارد شده اشتباه میباشد.",
    PHONE_NUMBER_EXIST: "این شماره تلفن در حال حاضر وجود دارد.",
    PHONE_NUMBER_NOT_EXIST: "شماره تلفن وارد شده اشتباه میباشد یا وجود ندارد.",
    TOO_MANY_REQUESTS:
        "پردازش درخواست در این لحظه امکان پذیر نمیباشد. لطفا بعدا تلاش کنید.",
    INTERNAL_SERVER_ERROR: "مشکلی برای سرور پیش آمده. لطفا بعدا تلاش کنید.",
    REQUEST_TIMEOUT: "درخواست به سرور ارسال نشد. لطفا بعدا تلاش کنید.",
    OTP_DOES_NOT_EXIST:
        "کد یکبار مصرف وجود ندارد یا منقضی شده. لطفا دوباره تلاش کنید.",
});
