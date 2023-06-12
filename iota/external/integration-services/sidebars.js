/**
 * * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    docs: [
        {
            type: "doc",
            id: "welcome",
            label: "Welcome",
        },
        {
            type: "category",
            label: "Getting Started",
            collapsed: false,
            items: [
                "getting_started/overview",
                {
                    type: "doc",
                    label: "Node.js",
                    id: "getting_started/installation/node_setup",
                },
                {
                    type: 'category',
                    label: 'Java',
                    items: ['getting_started/installation/java/local_setup']
                },
                {
                    type: 'category',
                    label: 'Kubernetes',
                    items: [
                        "getting_started/installation/kubernetes/local_setup",
                        "getting_started/installation/kubernetes/configuration",
                    ],
                },
                {
                    type: "doc",
                    label: "Docker Compose",
                    id: "getting_started/installation/docker_compose_setup",
                },
            ],
        },
        {
            type: "category",
            label: "Explanations",
            items: [
                {
                    type: "category",
                    label: "Services",
                    items: [

                        "explanations/identity",
                        "explanations/streams",
                        'explanations/authentication',
                        {
                            type: "category",
                            label: "Audit Trail Gateway",
                            items: [
                                {
                                    type: "doc",
                                    id: "explanations/services/audit-trail-gateway/introduction",
                                    label: "Introduction",
                                },
                                "explanations/services/audit-trail-gateway/API-definition",
                                "explanations/services/audit-trail-gateway/use-cases",
                            ],
                        },
                        {
                            type: "category",
                            label: "SSI Bridge",
                            items: [
                                {
                                    type: "doc",
                                    id: "explanations/services/SSI-bridge/introduction",
                                    label: "Introduction",
                                },
                                "explanations/services/SSI-bridge/API-definition",
                                "explanations/services/SSI-bridge/use-cases",
                            ],
                        },
                        {
                            type: "category",
                            label: "Dashboard",
                            items: [
                                {
                                    type: "doc",
                                    id: "explanations/services/dashboard/dashboard",
                                    label: "Dashboard"
                                },
                                {
                                    type: "doc",
                                    id: "explanations/services/dashboard/ui-components",
                                    label: "UI Components"
                                },
                            ]
                        },
                    ],
                },
            ]
        },
        {
            type: "category",
            label: "How Tos",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Integration Services SDK",
                    items: [
                        'how_tos/integration-services-sdk/introduction',
                        'how_tos/integration-services-sdk/run-how-tos',
                        'how_tos/integration-services-sdk/create-identity-and-credentials',
                        'how_tos/integration-services-sdk/update-users',
                        'how_tos/integration-services-sdk/delete-users',
                        'how_tos/integration-services-sdk/trusted-authorities',
                        'how_tos/integration-services-sdk/create-channel',
                        'how_tos/integration-services-sdk/authorize-to-channel',
                        'how_tos/integration-services-sdk/search-channel-and-validate-data',
                    ]
                },
                {
                    type: "category",
                    label: "Integration Service CLI",
                    items: [
                        {
                            type: "doc",
                            label: "Introduction",
                            id: "how_tos/is-cli/introduction"
                        },
                        {
                            type: "doc",
                            label: "Create Identities",
                            id: "how_tos/is-cli/create-identities"
                        },
                        {
                            type: "doc",
                            label: "Authenticate Your Identity",
                            id: "how_tos/is-cli/authenticate-your-identity"
                        },

                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'References',
            items: [
                {
                    type: "doc",
                    id: "references/audit_trail_gw_api_reference",
                    label: "Audit-Trail GW API Reference",
                },
                {
                    type: "doc",
                    id: "references/ssi_bridge_api_reference",
                    label: "SSI-Bridge API Reference",
                },

            ]
        },
        {
            type: "doc",
            id: "troubleshooting",
            label: "Troubleshooting",
        },
        {
            type: "doc",
            id: "faq",
            label: "FAQ",
        },
        {
            type: "doc",
            id: "contribute",
            label: "Contribute",
        },
        {
            type: "doc",
            id: "contact",
            label: "Contact",
        },
    ],
};
