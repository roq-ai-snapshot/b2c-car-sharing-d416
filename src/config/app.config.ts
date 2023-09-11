interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View available cars near location.',
    'Book a car.',
    'Cancel booking.',
    'Update booking details.',
  ],
  ownerAbilities: [
    'Manage company information',
    'Invite Fleet Managers and Admins',
    'Manage fleet information',
    'Assign cars to locations',
    'Manage access rights of Fleet Managers',
    'View available cars',
    'Book a car',
    'Cancel booking',
    'Update booking details',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/68e2cd8f-9905-4265-9a00-4c60437fdbea',
};
