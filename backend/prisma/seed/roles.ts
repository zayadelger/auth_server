import { Prisma } from '@prisma/client'

export const defaultRoles: Prisma.Enumerable<Prisma.RoleCreateWithoutApplicationInput> = [
  {
    name: 'admin',
    description: 'Global admin',
    isSuperRole: true,
    permissions: [{ action: 'read', subject: 'Test' }],
  },
  { name: 'api_key_manager', description: 'API key manager' },
  { name: 'application_deleter', description: 'Application deleter' },
  { name: 'application_manager', description: 'Application manager' },
  { name: 'audit_log_viewer', description: 'Audit log viewer' },
  { name: 'connector_deleter', description: 'Connector deleter' },
  { name: 'connector_manager', description: 'Connector manager' },
  { name: 'consent_deleter', description: 'Consent deleter' },
  { name: 'consent_manager', description: 'Consent manager' },
  { name: 'email_template_manager', description: 'Email template manager' },
  { name: 'event_log_viewer', description: 'Event log viewer' },
  { name: 'form_deleter', description: 'Form deleter' },
  { name: 'form_manager', description: 'Form manager' },
  { name: 'group_deleter', description: 'Group deleter' },
  { name: 'group_manager', description: 'Group manager' },
  { name: 'key_manager', description: 'Key manager' },
  { name: 'lambda_manager', description: 'Lambda manager' },
  { name: 'reactor_manager', description: 'Reactor manager' },
  { name: 'report_viewer', description: 'Report viewer' },
  { name: 'system_manager', description: 'System configuration manager' },
  { name: 'tenant_deleter', description: 'Tenant deleter' },
  { name: 'tenant_manager', description: 'Tenant manager' },
  { name: 'theme_manager', description: 'Theme manager' },
  { name: 'user_action_deleter', description: 'User action deleter' },
  { name: 'user_action_manager', description: 'User action manager' },
  { name: 'user_deleter', description: 'User deleter' },
  { name: 'user_manager', description: 'User manager' },
  { name: 'webhook_manager', description: 'Webhook manager' },
  { name: 'everyone', description: 'Default user role' },
]
