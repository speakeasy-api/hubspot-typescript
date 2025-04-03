import { z } from "zod";
import { Register } from "./extensions.js";
import { PromptDefinition } from "./prompts.js";

export function registerMCPExtensions(register: Register): void {
  register.prompt(prompt$updateContact);
}

const updateContactArgs = { email: z.string().optional(),  phone: z.string().optional(), field_to_update: z.string(), updated_value: z.string() };
export const prompt$updateContact: PromptDefinition<typeof updateContactArgs>  = {
  name: "update-hubspot-contact-prompt",
  description: "update a hubspot contact",
  args: updateContactArgs,
  prompt: (_client, args, _extra) => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: `1. Find a hubspot contact based off of either email ${args.email} or phone ${args.phone} depending on what is available to you, 
        make sure to return the current value of field ${args.field_to_update} and display this value to me.
        2. See if the provided value ${args.updated_value} seems reasonable for the field ${args.field_to_update}
        3. If the value is reasonable ask the user if they would like to update the contact field ${args.field_to_update} to that value ${args.updated_value}. If yes, update the contact.`
      }
    }]
  })
}
