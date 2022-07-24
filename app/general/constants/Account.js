export const Account = [
    {
        userId: 1,
        email: 'user1@email.com',
        password: 'user1',
        accountType: 'staff',
        userName: 'user1',
        librarianId: 2
    },
    {
        userId: 2,
        email: 'user2@email.com',
        password: 'user2',
        accountType: 'user',
        userName: 'user2',
        borrowing: [2, 12, 14, 17, 19],
        borrowed: [1, 3, 5],
        rating: 5,
    },
    {
        userId: 3,
        email: 'user3@email.com',
        password: 'user3',
        accountType: 'staff',
        userName: 'user3',
        librarianId: 5
    },
    {
        userId: 4,
        email: 'use41@email.com',
        password: 'user4',
        accountType: 'user',
        userName: 'user4',
        borrowing: [8, 10],
        borrowed: [11, 14, 18, 19],
        rating: 12,
    },
    {
        userId: 5,
        email: 'user5@email.com',
        password: 'user5',
        accountType: 'staff',
        userName: 'user5',
        librarianId: 4
    },
]