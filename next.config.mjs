/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
      return [
            { source: '/articles/true-love-logic-mechanism/', destination: '/topics/relationships/true-love', permanent: true },
                  { source: '/articles/when-you-blame-the-other-side/', destination: '/topics/relationships/blaming-the-other', permanent: true },
                        { source: '/articles/resolving-fights/', destination: '/topics/relationships/why-we-fight', permanent: true },
                              { source: '/articles/intimate-photos-online-what-to-do/', destination: '/topics/relationships/intimate-photos', permanent: true },
                                    { source: '/articles/understanding-anger/', destination: '/topics/existence/anger', permanent: true },
                                          { source: '/articles/who-am-i/', destination: '/topics/identity/who-am-i', permanent: true },
                                                { source: '/topics/love/', destination: '/topics/relationships', permanent: true },
                                                      { source: '/blog/', destination: '/topics/', permanent: true },
                                                            // יש להוסיף כאן את שאר ההפניות מהרשימה המלאה
                                                                ];
                                                                  },
                                                                  };

                                                                  export default nextConfig;
