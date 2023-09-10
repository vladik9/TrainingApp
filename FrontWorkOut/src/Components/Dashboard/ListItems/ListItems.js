import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MedicationIcon from '@mui/icons-material/Medication';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddTaskIcon from '@mui/icons-material/AddTask';

export const mainListItems = (
     <React.Fragment>
          <ListItemButton>
               <ListItemIcon>
                    <DateRangeIcon />
               </ListItemIcon>
               <ListItemText primary="Your Week" />
          </ListItemButton>
          <ListItemButton>
               <ListItemIcon>
                    <DomainAddIcon />
               </ListItemIcon>
               <ListItemText primary="Your next week" />
          </ListItemButton>
          <ListItemButton>
               <ListItemIcon>
                    <RestaurantMenuIcon />
               </ListItemIcon>
               <ListItemText primary="Your Nutrition" />
          </ListItemButton>
          <ListItemButton>
               <ListItemIcon>
                    <MedicationIcon />
               </ListItemIcon>
               <ListItemText primary="Your Vitamins" />
          </ListItemButton>
          <ListItemButton>
               <ListItemIcon>
                    <AddTaskIcon />
               </ListItemIcon>
               <ListItemText primary="Your Supliments" />
          </ListItemButton>
     </React.Fragment>
);

export const secondaryListItems = (
     <React.Fragment>
          <ListSubheader component="div" inset>
               Saved reports
          </ListSubheader>
          <ListItemButton>
               <ListItemIcon>
                    <AssignmentIcon />
               </ListItemIcon>
               <ListItemText primary="Empty now month" />
          </ListItemButton>
          <ListItemButton>
               <ListItemIcon>
                    <AssignmentIcon />
               </ListItemIcon>
               <ListItemText primary="Empty now month" />
          </ListItemButton>
          <ListItemButton>
               <ListItemIcon>
                    <AssignmentIcon />
               </ListItemIcon>
               <ListItemText primary="Empty now month" />
          </ListItemButton>
     </React.Fragment>
);