module.exports = {
    env: {
      
      NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,  // Exposing server-side variables too
    },
    images: {
      domains: ['discz-production-s3-bucket.s3.amazonaws.com','i.scdn.co'],
    },
  }