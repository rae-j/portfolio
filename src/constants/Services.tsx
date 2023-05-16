export interface IService {
  title: string
  description?: string
  src?: string
}

export const SERVICE_LIST: IService[] = [
  {
    title: "Web Design",
    description:
      "I work closely with my clients to understand their business goals and target audience to provide the perfect design."
  },
  {
    title: "Web Support",
    description:
      "I provide troubleshooting and issue resolution services, as well as ongoing support to ensure the website is always functioning at its best."
  },
  {
    title: "Web Development",
    description:
      "Building your website with the right tool according to business and desired designs. This includes building the front-end and back-end functionality, integrating databases, and ensuring the website is optimised for performance, security, and scalability."
  },
  {
    title: "Search Engine Optimisation (SEO)",
    description:
      "Optimising your website's content, structure, and improving website speed and performance. With my SEO service, you can increase their website traffic, generate leads, and boost your online presence, helping you achieve your business goals."
  },
  {
    title: "Shopify Development",
    description:
      "Customising a theme, designing and developing the website's functionality, integrating payment gateways, etc. With Shopify, you will have a powerful and fully-functional online store that helps them grow your business and increase your sales. "
  }
]
