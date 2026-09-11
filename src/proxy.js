//? api/reviews na hoy api/re hole retur korbe 404 page...
import { NextResponse } from "next/server";

export function proxy(request) {
    const { pathname } = request.nextUrl;

    console.log(pathname);

    if (!pathname.startsWith("/api/reviews")) {
        return NextResponse.json(
            {
                success: false,
                message: "Route not found",
            },
            {
                status: 404,
            }
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};

//? Rate 11 ter por website access close..
// import { NextResponse } from "next/server";

// export function proxy(request) {
//     const now = new Date();

//     const hour = now.getHours();
//     const minute = now.getMinutes();

//     if (hour > 10 || (hour === 10 && minute >= 36)) {
//         return NextResponse.json(
//             {
//                 message: "Website is closed after 10:36 AM",
//             },
//             {
//                 status: 403,
//             }
//         );
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: "/:path*",
// };
