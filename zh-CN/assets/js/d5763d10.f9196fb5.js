"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[66101],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>d});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},_="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),_=s(a),m=r,d=_["".concat(c,".").concat(m)]||_[m]||p[m]||i;return a?t.createElement(d,o(o({ref:n},u),{},{components:a})):t.createElement(d,o({ref:n},u))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[_]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63802:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=a(87462),r=(a(67294),a(3905));const i={title:"Validate Terraform Configuration"},o=void 0,l={unversionedId:"user_docs/guides/working-with-terraform/validation",id:"version-0.7.0/user_docs/guides/working-with-terraform/validation",title:"Validate Terraform Configuration",description:"Introduction",source:"@site/versioned_docs/version-0.7.0/user_docs/guides/working-with-terraform/3-validation.md",sourceDirName:"user_docs/guides/working-with-terraform",slug:"/user_docs/guides/working-with-terraform/validation",permalink:"/zh-CN/docs/user_docs/guides/working-with-terraform/validation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/working-with-terraform/3-validation.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",sidebarPosition:3,frontMatter:{title:"Validate Terraform Configuration"},sidebar:"user_docs",previous:{title:"Vault",permalink:"/zh-CN/docs/user_docs/guides/secret-management/vault"},next:{title:"KusionStack",permalink:"/zh-CN/docs/user_docs/guides/working-with-kusion/"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Writing Terraform Plan Polices with KCL Programming Language",id:"writing-terraform-plan-polices-with-kcl-programming-language",level:2},{value:"0. Prerequisite",id:"0-prerequisite",level:3},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Create a KCL Policy File",id:"2-create-a-kcl-policy-file",level:3},{value:"3. Evaluate the Terraform Plan File Against the KCL Policy",id:"3-evaluate-the-terraform-plan-file-against-the-kcl-policy",level:3},{value:"4. Mock a Policy Failure",id:"4-mock-a-policy-failure",level:3},{value:"Summary",id:"summary",level:2}],u={toc:s},_="wrapper";function p(e){let{components:n,...a}=e;return(0,r.kt)(_,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Validation is the process of verifying that data is accurate, reliable, and meets certain requirements or constraints. This includes checking the data for completeness, consistency, accuracy, and relevance."),(0,r.kt)("p",null,"We can use KCL and its vet tools to manually or automatically perform terraform configuration validation to ensure data consistency with KCL policy codes."),(0,r.kt)("h2",{id:"writing-terraform-plan-polices-with-kcl-programming-language"},"Writing Terraform Plan Polices with KCL Programming Language"),(0,r.kt)("h3",{id:"0-prerequisite"},"0. Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/downloads?product_intent=terraform"},"Terraform")),(0,r.kt)("li",{parentName:"ul"},"Set up your ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"AWS credentials")," correctly for your terminal to use.")),(0,r.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("p",null,"Firstly, let's get the example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/terraform/validation\n")),(0,r.kt)("p",null,"We can run the following command to show the terraform config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat main.tf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'provider "aws" {\n    region = "us-west-1"\n}\nresource "aws_instance" "web" {\n  instance_type = "t2.micro"\n  ami = "ami-09b4b74c"\n}\nresource "aws_autoscaling_group" "my_asg" {\n  availability_zones        = ["us-west-1a"]\n  name                      = "my_asg"\n  max_size                  = 5\n  min_size                  = 1\n  health_check_grace_period = 300\n  health_check_type         = "ELB"\n  desired_capacity          = 4\n  force_delete              = true\n  launch_configuration      = "my_web_config"\n}\nresource "aws_launch_configuration" "my_web_config" {\n    name = "my_web_config"\n    image_id = "ami-09b4b74c"\n    instance_type = "t2.micro"\n}\n')),(0,r.kt)("p",null,"Run the following command to get the terraform plan configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"terraform init\nterraform plan --out tfplan.binary\nterraform show -json tfplan.binary > tfplan.json\n")),(0,r.kt)("p",null,"The output json is"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("code",null,"tfplan.json")," (click to expand large file)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "format_version": "0.1",\n  "terraform_version": "0.12.6",\n  "planned_values": {\n    "root_module": {\n      "resources": [\n        {\n          "address": "aws_autoscaling_group.my_asg",\n          "mode": "managed",\n          "type": "aws_autoscaling_group",\n          "name": "my_asg",\n          "provider_name": "aws",\n          "schema_version": 0,\n          "values": {\n            "availability_zones": ["us-west-1a"],\n            "desired_capacity": 4,\n            "enabled_metrics": null,\n            "force_delete": true,\n            "health_check_grace_period": 300,\n            "health_check_type": "ELB",\n            "initial_lifecycle_hook": [],\n            "launch_configuration": "my_web_config",\n            "launch_template": [],\n            "max_size": 5,\n            "metrics_granularity": "1Minute",\n            "min_elb_capacity": null,\n            "min_size": 1,\n            "mixed_instances_policy": [],\n            "name": "my_asg",\n            "name_prefix": null,\n            "placement_group": null,\n            "protect_from_scale_in": false,\n            "suspended_processes": null,\n            "tag": [],\n            "tags": null,\n            "termination_policies": null,\n            "timeouts": null,\n            "wait_for_capacity_timeout": "10m",\n            "wait_for_elb_capacity": null\n          }\n        },\n        {\n          "address": "aws_instance.web",\n          "mode": "managed",\n          "type": "aws_instance",\n          "name": "web",\n          "provider_name": "aws",\n          "schema_version": 1,\n          "values": {\n            "ami": "ami-09b4b74c",\n            "credit_specification": [],\n            "disable_api_termination": null,\n            "ebs_optimized": null,\n            "get_password_data": false,\n            "iam_instance_profile": null,\n            "instance_initiated_shutdown_behavior": null,\n            "instance_type": "t2.micro",\n            "monitoring": null,\n            "source_dest_check": true,\n            "tags": null,\n            "timeouts": null,\n            "user_data": null,\n            "user_data_base64": null\n          }\n        },\n        {\n          "address": "aws_launch_configuration.my_web_config",\n          "mode": "managed",\n          "type": "aws_launch_configuration",\n          "name": "my_web_config",\n          "provider_name": "aws",\n          "schema_version": 0,\n          "values": {\n            "associate_public_ip_address": false,\n            "enable_monitoring": true,\n            "ephemeral_block_device": [],\n            "iam_instance_profile": null,\n            "image_id": "ami-09b4b74c",\n            "instance_type": "t2.micro",\n            "name": "my_web_config",\n            "name_prefix": null,\n            "placement_tenancy": null,\n            "security_groups": null,\n            "spot_price": null,\n            "user_data": null,\n            "user_data_base64": null,\n            "vpc_classic_link_id": null,\n            "vpc_classic_link_security_groups": null\n          }\n        }\n      ]\n    }\n  },\n  "resource_changes": [\n    {\n      "address": "aws_autoscaling_group.my_asg",\n      "mode": "managed",\n      "type": "aws_autoscaling_group",\n      "name": "my_asg",\n      "provider_name": "aws",\n      "change": {\n        "actions": ["create"],\n        "before": null,\n        "after": {\n          "availability_zones": ["us-west-1a"],\n          "desired_capacity": 4,\n          "enabled_metrics": null,\n          "force_delete": true,\n          "health_check_grace_period": 300,\n          "health_check_type": "ELB",\n          "initial_lifecycle_hook": [],\n          "launch_configuration": "my_web_config",\n          "launch_template": [],\n          "max_size": 5,\n          "metrics_granularity": "1Minute",\n          "min_elb_capacity": null,\n          "min_size": 1,\n          "mixed_instances_policy": [],\n          "name": "my_asg",\n          "name_prefix": null,\n          "placement_group": null,\n          "protect_from_scale_in": false,\n          "suspended_processes": null,\n          "tag": [],\n          "tags": null,\n          "termination_policies": null,\n          "timeouts": null,\n          "wait_for_capacity_timeout": "10m",\n          "wait_for_elb_capacity": null\n        },\n        "after_unknown": {\n          "arn": true,\n          "availability_zones": [false],\n          "default_cooldown": true,\n          "id": true,\n          "initial_lifecycle_hook": [],\n          "launch_template": [],\n          "load_balancers": true,\n          "mixed_instances_policy": [],\n          "service_linked_role_arn": true,\n          "tag": [],\n          "target_group_arns": true,\n          "vpc_zone_identifier": true\n        }\n      }\n    },\n    {\n      "address": "aws_instance.web",\n      "mode": "managed",\n      "type": "aws_instance",\n      "name": "web",\n      "provider_name": "aws",\n      "change": {\n        "actions": ["create"],\n        "before": null,\n        "after": {\n          "ami": "ami-09b4b74c",\n          "credit_specification": [],\n          "disable_api_termination": null,\n          "ebs_optimized": null,\n          "get_password_data": false,\n          "iam_instance_profile": null,\n          "instance_initiated_shutdown_behavior": null,\n          "instance_type": "t2.micro",\n          "monitoring": null,\n          "source_dest_check": true,\n          "tags": null,\n          "timeouts": null,\n          "user_data": null,\n          "user_data_base64": null\n        },\n        "after_unknown": {\n          "arn": true,\n          "associate_public_ip_address": true,\n          "availability_zone": true,\n          "cpu_core_count": true,\n          "cpu_threads_per_core": true,\n          "credit_specification": [],\n          "ebs_block_device": true,\n          "ephemeral_block_device": true,\n          "host_id": true,\n          "id": true,\n          "instance_state": true,\n          "ipv6_address_count": true,\n          "ipv6_addresses": true,\n          "key_name": true,\n          "network_interface": true,\n          "network_interface_id": true,\n          "password_data": true,\n          "placement_group": true,\n          "primary_network_interface_id": true,\n          "private_dns": true,\n          "private_ip": true,\n          "public_dns": true,\n          "public_ip": true,\n          "root_block_device": true,\n          "security_groups": true,\n          "subnet_id": true,\n          "tenancy": true,\n          "volume_tags": true,\n          "vpc_security_group_ids": true\n        }\n      }\n    },\n    {\n      "address": "aws_launch_configuration.my_web_config",\n      "mode": "managed",\n      "type": "aws_launch_configuration",\n      "name": "my_web_config",\n      "provider_name": "aws",\n      "change": {\n        "actions": ["create"],\n        "before": null,\n        "after": {\n          "associate_public_ip_address": false,\n          "enable_monitoring": true,\n          "ephemeral_block_device": [],\n          "iam_instance_profile": null,\n          "image_id": "ami-09b4b74c",\n          "instance_type": "t2.micro",\n          "name": "my_web_config",\n          "name_prefix": null,\n          "placement_tenancy": null,\n          "security_groups": null,\n          "spot_price": null,\n          "user_data": null,\n          "user_data_base64": null,\n          "vpc_classic_link_id": null,\n          "vpc_classic_link_security_groups": null\n        },\n        "after_unknown": {\n          "ebs_block_device": true,\n          "ebs_optimized": true,\n          "ephemeral_block_device": [],\n          "id": true,\n          "key_name": true,\n          "root_block_device": true\n        }\n      }\n    }\n  ],\n  "configuration": {\n    "provider_config": {\n      "aws": {\n        "name": "aws",\n        "expressions": {\n          "region": {\n            "constant_value": "us-west-1"\n          }\n        }\n      }\n    },\n    "root_module": {\n      "resources": [\n        {\n          "address": "aws_autoscaling_group.my_asg",\n          "mode": "managed",\n          "type": "aws_autoscaling_group",\n          "name": "my_asg",\n          "provider_config_key": "aws",\n          "expressions": {\n            "availability_zones": {\n              "constant_value": ["us-west-1a"]\n            },\n            "desired_capacity": {\n              "constant_value": 4\n            },\n            "force_delete": {\n              "constant_value": true\n            },\n            "health_check_grace_period": {\n              "constant_value": 300\n            },\n            "health_check_type": {\n              "constant_value": "ELB"\n            },\n            "launch_configuration": {\n              "constant_value": "my_web_config"\n            },\n            "max_size": {\n              "constant_value": 5\n            },\n            "min_size": {\n              "constant_value": 1\n            },\n            "name": {\n              "constant_value": "my_asg"\n            }\n          },\n          "schema_version": 0\n        },\n        {\n          "address": "aws_instance.web",\n          "mode": "managed",\n          "type": "aws_instance",\n          "name": "web",\n          "provider_config_key": "aws",\n          "expressions": {\n            "ami": {\n              "constant_value": "ami-09b4b74c"\n            },\n            "instance_type": {\n              "constant_value": "t2.micro"\n            }\n          },\n          "schema_version": 1\n        },\n        {\n          "address": "aws_launch_configuration.my_web_config",\n          "mode": "managed",\n          "type": "aws_launch_configuration",\n          "name": "my_web_config",\n          "provider_config_key": "aws",\n          "expressions": {\n            "image_id": {\n              "constant_value": "ami-09b4b74c"\n            },\n            "instance_type": {\n              "constant_value": "t2.micro"\n            },\n            "name": {\n              "constant_value": "my_web_config"\n            }\n          },\n          "schema_version": 0\n        }\n      ]\n    }\n  }\n}\n'))),(0,r.kt)("h3",{id:"2-create-a-kcl-policy-file"},"2. Create a KCL Policy File"),(0,r.kt)("p",null,"main.k"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema TFPlan:\n    # Omit other attributes\n    [...str]: any\n    resource_changes?: [AcceptableChange]\n\nschema AcceptableChange:\n    # Omit other attributes\n    [...str]: any\n    check:\n        # Reject AWS autoscaling group Resource delete action\n        all action in change.actions {\n            action not in ["delete"]\n        } if type == "aws_autoscaling_group", "Disable AWS autoscaling group resource delete action for the resource ${type} ${name}"\n')),(0,r.kt)("p",null,"This policy file checks that no AWS Auto Scaling groups are being deleted - even if that deletion is part of a delete-and-recreate operation."),(0,r.kt)("h3",{id:"3-evaluate-the-terraform-plan-file-against-the-kcl-policy"},"3. Evaluate the Terraform Plan File Against the KCL Policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl vet tfplan.json main.k\n")),(0,r.kt)("p",null,"Because the plan was acceptable to the 1 policies contained in the policy file, ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl vet")," printed nothing, and its exit code was zero."),(0,r.kt)("h3",{id:"4-mock-a-policy-failure"},"4. Mock a Policy Failure"),(0,r.kt)("p",null,"Create a KCL file named ",(0,r.kt)("inlineCode",{parentName:"p"},"main.policy.failure.k")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema TFPlan:\n    # Omit other attributes\n    [...str]: any\n    resource_changes?: [AcceptableChange]\n\nschema AcceptableChange:\n    # Omit other attributes\n    [...str]: any\n    check:\n        # Reject AWS autoscaling group Resource delete action\n        all action in change.actions {\n            action not in ["create"]\n        } if type == "aws_autoscaling_group", "Disable AWS autoscaling group resource create action for the resource ${type} ${name}"\n')),(0,r.kt)("p",null,"Run the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl vet tfplan.json main.policy.failure.k\n")),(0,r.kt)("p",null,"We can see the error message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Error: EvaluationError\n  --\x3e main.policy.failure.k:13:1\n   |\n13 |         } if type == "aws_autoscaling_group", "Disable AWS autoscaling group resource create action for the resource ${type} ${name}"\n   |  Check failed on the condition: Disable AWS autoscaling group resource create action for the resource aws_autoscaling_group my_asg\n   |\n')),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This document explains how to validate Terraform configuration using KCL and its vet tools. Validation is the process of verifying the accuracy, reliability, and compliance of data with certain requirements or constraints. By using KCL and vet tools, we can manually or automatically perform Terraform configuration validation to ensure data consistency with KCL policy codes."))}p.isMDXComponent=!0}}]);