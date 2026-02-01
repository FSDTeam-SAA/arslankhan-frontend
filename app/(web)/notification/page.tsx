'use client';

import React from "react"

import { Eye, Trash2, CheckCircle, MessageSquare, Calendar, Zap } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  iconColor: string;
  unread: boolean;
}

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Listing Approved',
    description: 'Lorem ipsum dolor sit amet consectetur. Diam lectus euismod lorem libero. Elit eget sed sit pellentesque velit. Arcu eu risus placerat molestie lectus in commodo id. Tempus pellentesque commodo morbi morbi.',
    date: '01/01/2026',
    icon: <CheckCircle className="w-5 h-5" />,
    iconColor: 'text-green-500',
    unread: true,
  },
  {
    id: '2',
    title: 'New Message',
    description: 'Lorem ipsum dolor sit amet consectetur. Diam lectus euismod lorem libero. Elit eget sed sit pellentesque velit. Arcu eu risus placerat molestie lectus in commodo id. Tempus pellentesque commodo morbi morbi.',
    date: '01/01/2026',
    icon: <MessageSquare className="w-5 h-5" />,
    iconColor: 'text-blue-500',
    unread: true,
  },
  {
    id: '3',
    title: 'Listing Expiring Soon',
    description: 'Lorem ipsum dolor sit amet consectetur. Diam lectus euismod lorem libero. Elit eget sed sit pellentesque velit. Arcu eu risus placerat molestie lectus in commodo id. Tempus pellentesque commodo morbi morbi.',
    date: '01/01/2026',
    icon: <Calendar className="w-5 h-5" />,
    iconColor: 'text-orange-500',
    unread: false,
  },
  {
    id: '4',
    title: 'Price Update Suggestions',
    description: 'Lorem ipsum dolor sit amet consectetur. Diam lectus euismod lorem libero. Elit eget sed sit pellentesque velit. Arcu eu risus placerat molestie lectus in commodo id. Tempus pellentesque commodo morbi morbi.',
    date: '01/01/2026',
    icon: <Zap className="w-5 h-5" />,
    iconColor: 'text-purple-500',
    unread: true,
  },
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Notifications
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Stay Updated
          </p>
        </div>
      </div>

      {/* Notifications List */}
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-6 sm:space-y-8">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Title and Icon */}
              <div className="flex items-start gap-4 sm:gap-6 mb-4">
                <div className={`${notification.iconColor} flex-shrink-0 mt-1`}>
                  {notification.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                      {notification.title}
                    </h2>
                    {notification.unread && (
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                {notification.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 border border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors duration-200 font-medium text-sm"
                >
                  <Eye className="w-4 h-4" />
                  Mark as read
                </button>
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 border border-destructive text-destructive rounded-lg hover:bg-destructive hover:text-background transition-colors duration-200 font-medium text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>

              {/* Date */}
              <p className="text-xs sm:text-sm text-muted-foreground">
                {notification.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
