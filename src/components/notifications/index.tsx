import { Badge, Box, Drawer, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { BellIcon, BellIconYellow, CloseIcon } from "../../assets/icons";
import { LabelInter } from "../../utils/typography";
import * as s from "./styles";

const data = [
  {
    id: 1,
    description: "Notificação sobre alguma coisa",
  },
  {
    id: 2,
    description: "Notificação sobre alguma coisa",
  },
  {
    id: 3,
    description: "Notificação sobre alguma coisa",
  },
];

export const Notifications = () => {
  const [openNote, setOpenNote] = useState(false);
  const [notifications, setNotifications] = useState(data);

  const handleCloseNotification = (id: number) => {
    const newData = data.filter((item) => item.id === id);
    setNotifications(newData);
  };

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  return (
    <>
      <IconButton onClick={() => setOpenNote(true)}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
          sx={{
            "& .MuiBadge-badge": {
              bgcolor: "#DFBD2C",
              height: "12px",
              width: "12px",
              borderRadius: "6px",
            },
          }}
          badgeContent={
            <LabelInter
              text={"12"}
              fontSize={24}
              fontWeight={"400"}
              color="#000"
            />
          }
        >
          <img src={BellIcon} alt="bell-icon" />
        </Badge>
      </IconButton>
      <Drawer
        anchor={"right"}
        open={openNote}
        onClose={() => setOpenNote(false)}
      >
        <s.ContainerMain>
          <Box sx={{ display: "flex" }} mb={4}>
            <img src={BellIconYellow} alt="bell-icon" />
            <LabelInter
              text={"Notificações"}
              marginLeft={"4px"}
              fontSize={24}
              fontWeight={"700"}
            />
          </Box>
          <>
            {data.map((item: any) => {
              return (
                <>
                  {notifications && (
                    <s.CardNote>
                      <IconButton
                        onClick={() => handleCloseNotification(item.id)}
                      >
                        <img src={CloseIcon} alt="close icon" />
                      </IconButton>
                      <s.WrapperContent>
                        <img src={BellIconYellow} alt="bell-icon" />
                        <LabelInter
                          text={item.description}
                          fontSize={12}
                          fontWeight={"400"}
                          marginLeft={"4px"}
                        />
                      </s.WrapperContent>
                    </s.CardNote>
                  )}
                </>
              );
            })}
          </>
        </s.ContainerMain>
      </Drawer>
    </>
  );
};
