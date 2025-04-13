/**
 * API Configuration
 *
 * This file contains configuration for all API endpoints used in the application.
 * Update the baseUrl to change the API server for all endpoints.
 */

// Base API URL - change this to point to your API server
export const baseUrl = "http://localhost:5000"

// API Endpoints
export const apiEndpoints = {
  // Verification endpoints
  verification: {
    verifyEmail: `${baseUrl}/api/verify/email`,
  },

  // Finder endpoints (placeholder for future implementation)
  finder: {
    findEmails: `${baseUrl}/api/finder/search`,
  },

  // Sender endpoints (placeholder for future implementation)
  sender: {
    sendEmail: `${baseUrl}/api/sender/send`,
  },

  // All-in-one endpoints (placeholder for future implementation)
  allInOne: {
    process: `${baseUrl}/api/all-in-one/process`,
  },
}
